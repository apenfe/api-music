const customHeader = (req, res, next) => {

    try {
        const apiKey = req.headers.api_key

        if (apiKey === "apenfe") {
            next()
        } else {
            res.status(403)
            res.send({ error: "API KEY invalida" })
        }

    } catch (error) {
        res.status(403)
        res.send({ error: "Algo ocurrio en el custom header" })
    }

}

module.exports = customHeader