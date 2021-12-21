const { sequelize } = require('../../models');
const { QueryTypes } = require('sequelize');
    
module.exports = async (req, res) => {
    const query = req.query
    const updateInfo = {'1': '1+1', '2': '2+1', '3': '특가'}
    
    if (query['event-info']) query['event-info'] = updateInfo[query['event-info']]
    
    // 파라미터중 하나라도 빈 문자열 or ' ' 들어있으면 400 반환
    if (Object.values(query).filter(e => e === '' || e === ' ').length > 0) {
        return res.status(400).json({message: "Bad Request"})
    }

    //! 변경된 부분(raw query 사용 > 시퀼라이즈...)
    const itemData = await sequelize.query(
        `SELECT item.id, item.name, item.price, item.img, item.category, 
            store.name AS store_name, event.info AS event_info, event.description
        FROM item INNER JOIN store INNER JOIN event
        WHERE item.store_id = store.id AND item.event_id = event.id
        ORDER BY item.ranking_count DESC
        `,
        { type: QueryTypes.SELECT },
    )
    
    try {
        const result = itemData.filter(item => {
            // 드럽긴 한데 조합마다 필터구문 따로 써줄거 아니면 전부 체크해야 함
            if (!query['category'] || item['category'] === query['category']) {
                if (!query['store-name'] || item['store_name'] === query['store-name']) {
                    if (!query['event-info'] || item['event_info'] === query['event-info']) {
                        return true
                    }
                }
            }
        })
        res.status(200).json({data: result})
    } catch(err) {
        res.status(500).json({message: "Internel Server Error"})
    }
}