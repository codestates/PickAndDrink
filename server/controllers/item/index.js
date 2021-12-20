// item은 파라미터 X 쿼리O

// step1 쿼리 추출하기 | O
// step2 단일 조건으로 필터링하기: findAll 사용하면 될듯
    // 추출한 query가 비었거나 value 가 비었을 경우 return all | O
    // category-id 필터
    // store-id 필터
    // event-info 필터
    const { sequelize } = require('../../models');
    const { QueryTypes } = require('sequelize');
    
    module.exports = async (req, res) => {
        const query = req.query
    
        // 파라미터중 하나라도 빈 문자열 or ' ' 들어있으면 400 반환
        // 그 이상은 상정안해야지...
        if (Object.values(query).filter(e => e === '' || e === ' ').length > 0) {
            return res.status(400).json({message: "Bad Request"})
        }
    
        //! 변경된 부분(raw query 사용)
        const itemData = await sequelize.query(
            `SELECT
                item.id, item.name, item.price, category.name as category, item.img, item.ranking, store_name, event_info 
            FROM
                item INNER JOIN category 
                INNER JOIN store_event_item 
                INNER JOIN store_event
            WHERE
                item.id = store_event_item.item_id 
                AND item.category_id = category.id 
                AND store_event_item.store_event_id = store_event.id 
            ORDER BY item.ranking
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
    
        // 모든 아이템 다 긁어와서 필터링하기...
        // const itemData = await item.findAll({
        //     include: [
        //         {
        //             model: store_event,
        //             required: false,
        //             attributes: [],
        //             raw: true
        //         },
        //         {
        //             model: category,
        //             required: false,
        //             attributes: ['name'],
        //             raw: true
        //         }
        //     ],
        //     attributes: ['id', 'name', 'price', 'img', 'ranking', 'store_events.store_name', 'store_events.event_info'],        
        //     raw: true // 만악의 근원
        //     // raw 옵션은 findOne() 및 findAll()에서 json형태로 보거나 가공하고 싶을 때 사용
        //     // ref: https://yangeok.github.io/node.js/2019/07/15/sequelize-opts.html
        // })
        // try {
        //     let result = itemData.filter(item => {
        //         // ToDo: 쓰레기값 제거할 방법 찾으면 없애기
        //         // 엉망인데 혹시 해결책 찾으면 알려주세요
        //         delete item["store_events.store_event_item.createdAt"]
        //         delete item["store_events.store_event_item.updatedAt"]
        //         delete item["store_events.store_event_item.item_id"]
        //         delete item["store_events.store_event_item.store_event_id"]
    
        //         // 드러운 필터링...해결책이 필요합니다...
        //         if (!query['category'] || item['category.name'] === query['category']) {
        //             if (!query['store-name'] || item['store_name'] === query['store-name']) {
        //                 if (!query['event-info'] || item['event_info'] === query['event-info']) {
        //                     return true
        //                 }
        //             }
        //         }
        //     })
        //     res.status(200).json({data: result})
        //     // ToDo: API문서에 400 Bad Request 옵션 있었는데 현재 코드로는 200/500만 작동
        //     // 쿼리가 비었을때 400을 반환할지 해당옵션을 무시할지 정해야 함
        // } catch(err) {
        //     res.status(500).json({message: "Internel Server Error"})
        // }