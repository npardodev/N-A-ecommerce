const createUsersDB = async(db) => {

    db.createUser({
        user: 'guest',
        pwd: '123456',
        roles: [{ role: 'read', db: 'ecommerce' }]
    })


    db.createUser({
        user: 'admin',
        pwd: '123456',
        roles: [{ role: 'readWrite', db: 'ecommerce' }]
    })

}

module.exports = { createUsers };