import { Growdever } from "../models/growdever.model";
import { Request, Response } from 'express';

export class GrowdeverController {
    async create(request: Request, response: Response) {
        const growdeverData = request.body;

        // desenvolver código

        return response.status(201).json(
            {
                id: 1,
                name: '',
                email: '',
                address: '',
                phone: '',
                dateOfBirth: new Date(),
            } as Growdever
        );
    }

    async list(request: Request, response: Response) {
        // desenvolver código

        return response.status(200).json(
            [
                {
                    uid: '',
                    name: '',
                    address: '',
                    phone: '',
                    dateOfBirth: new Date(),
                }
            ]
        );
    }

    async getByUid(request: Request, response: Response) {
        // desenvolver código

        return response.status(200).json(
            {
                id: 1,
                name: '',
                email: '',
                address: '',
                phone: '',
                dateOfBirth: new Date(),
            }
        );
    }

    async remove(request: Request, response: Response) {
        // desenvolver código

        return response.status(204).json();
    }

    async update(request: Request, response: Response) {
        const growdeverData = request.body;

        // desenvolver código

        return response.status(200).json(
            {
                id: 1,
                name: '',
                email: '',
                address: '',
                phone: '',
                dateOfBirth: new Date(),
            } as Growdever
        );
    }
}