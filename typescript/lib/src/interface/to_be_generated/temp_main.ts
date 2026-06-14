import * as p_di from 'pareto-core/dist/data/interface'

export type Parameters = {
    'arguments': p_di.List<string>,
}

export type Error = {
    'exit code': number
}
