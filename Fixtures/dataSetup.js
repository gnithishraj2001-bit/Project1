import {test as base} from '@playwright/test'

export const test = base.extend({

    users: async ({},use)=>{

        const users = [
            {username:"keerthi19",password:"85LV15"},
            {username:"harishr97",password:"12345"}
        ]

        await use(users)
    }
})