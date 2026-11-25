import * as responses from "../response/apiRes.js"
import { NOME_REGEX, EMAIL_REGEX } from "../regex/regex.js"

function verify(req, res, next) {
    const { nome, email, senha } = req.body
    // ----------------------------------------------------------------
    //nome
    if (typeof nome !== "string" || !NOME_REGEX.test(nome)) {
        return res.status(400).json(responses.apiResponse(
            false,
            "O nome deve conter apenas letras, acentos e espaços"
        ))
    }

    if (!nome || nome.trim() === "") {
        return res.status(400).json(responses.apiResponse(
            false,
            "Preencha o campo 'Nome'"
        ))
    }

    if (nome.length > 30) {
        return res.status(400).json(responses.apiResponse(
            false,
            "O nome de usuário não pode conter mais de 30 caracteres"
        ))
    }
    // ----------------------------------------------------------------
    //Email
    if (!email || email.trim() === "") {
        return res.status(400).json(responses.apiResponse(
            false,
            "Preencha o campo 'Email'"
        ))
    }
    if (!EMAIL_REGEX.test(email)) {
        return res.status(400).json(responses.apiResponse(
            false,
            "Email inválido"
        ))
    }

    // ----------------------------------------------------------------
    // Senha
    if (!senha || senha.trim() === "") {
        return res.status(400).json(responses.apiResponse(
            false,
            "Preencha o campo 'Senha'"
        ))
    }
    if (senha.length <= 8) {
        return res.status(400).json(responses.apiResponse(
            false,
            "Sua senha deve conter mais de 8 caracteres"
        ))
    }
    next()
}

export default verify
