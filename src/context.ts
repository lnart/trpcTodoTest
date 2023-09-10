import * as trpcExpress from '@trpc/server/adapters/express'
import { Pool } from 'pg'

const pool = new Pool({
    user: 'postgres',
    password: 'cooking',
    host: 'localhost',
    database: 'trpcTodoList',
    port: 5432,
})


export const createContext = ({
    req,
    res,
}: trpcExpress.CreateExpressContextOptions) => {
    return {
        db:pool
    }
}

export type Context = ReturnType<typeof createContext>