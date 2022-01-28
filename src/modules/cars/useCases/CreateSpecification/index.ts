import {SpecificationsRepository} from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationUseCase } from "../CreateSpecification/CreateSpecificationUseCase";
import { CreateSpecificationController} from "../CreateSpecification/CreateSpecificationController";


const specificationsRepository = new SpecificationsRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export{createSpecificationController};