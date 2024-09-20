const prisma = require('../config/prisma')

exports.getEmail = (email) => {
    return prisma.user.findFirst({
        where : {
            email,
        },
    });
}