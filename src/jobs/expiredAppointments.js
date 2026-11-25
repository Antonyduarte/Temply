import service from "../modules/agendamentos/agenda.service.js"

//Atualiza a cada minuto, os status dos agendamentos
async function expiredAppointments() {

    try {
        setInterval(async () => {
            await service.expireAppointments()
        }, 60000)
    } catch (error) {
        
        throw Error(error)
    }
}

export default { expiredAppointments }
