import { Users } from "@/repository/models/user/user";
import { Service } from "./services";
import { UsersViewModelInterface } from "@/repository/view_model/user/user_view_model";
import { Db } from "@/repository/db/db_connection";

class BrandServices {
    private service;

    constructor() {
        this.service = new Service(Db, Users)
    }

    async insert(entity: UsersViewModelInterface): Promise<UsersViewModelInterface[]> {
        entity.first_name = 'test';
        entity.lastName = 'hi';
        return this.service.insert(entity);
    }
}

export default BrandServices;