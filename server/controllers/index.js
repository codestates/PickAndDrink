module.exports = {
    
    login: require('./auth/login'),
    logout: require('./auth/logout'),
    me: require('./auth/me'),
    signout: require('./auth/signout'),
    signup: require('./auth/signup'),
    comment: require('./comment'),
    item: require('./item'),
    like: require('./like'),
    github: require('./auth/github'),
    googleLogin: require('./auth/google')
}