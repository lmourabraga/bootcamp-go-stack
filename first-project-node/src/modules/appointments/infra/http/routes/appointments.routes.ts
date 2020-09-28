import { Router } from 'express';
import { parseISO } from 'date-fns'; // Lib para formatar datas e horas
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//     const appointments = await appointmentsRepository.find();

//     return response.json(appointments);
// });

appointmentsRouter.post('/', async (request, response) => {
    const { provider_id, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
        date: parsedDate,
        provider_id,
    });

    return response.json(appointment);
});

export default appointmentsRouter;

// SoC: Separation of Concerns (Separação de preocupações);
// DTO: Data transfer object: Quando você transfere dados de um arquivo para o outro.
