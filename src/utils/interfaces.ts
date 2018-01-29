export type Message = any
export type Listener = (...args: any[]) => void
export type WorkerFunction = () => void

export interface CustomObject {
    [propName: string]: any
}

export interface TlsOptions {
    ca?: string
    pfx?: string
    key?: string
    cert?: string
    passphrase?: string
}

export interface HorizontalScaleOptions {
    masterOptions?: {
        port: number
        tlsOptions?: TlsOptions
    }
    brokersUrls?: string[]
    key?: string
}

export interface Configurations {
    worker: WorkerFunction
    port?: number
    workers?: number
    brokers?: number
    useBinary?: boolean
    brokersPorts?: number[]
    tlsOptions?: TlsOptions
    pingInterval?: number
    restartWorkerOnFail?: boolean
    horizontalScaleOptions?: HorizontalScaleOptions
}

export interface Options {
    worker: WorkerFunction
    port: number
    workers: number
    brokers: number
    useBinary: boolean
    brokersPorts: number[]
    tlsOptions: TlsOptions | false
    pingInterval: number
    restartWorkerOnFail: boolean
    horizontalScaleOptions: HorizontalScaleOptions | false
}