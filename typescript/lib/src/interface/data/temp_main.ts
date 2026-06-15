import * as p_di from 'pareto-core/dist/interface/data'

export type Parameters = {
    'arguments': p_di.List<string>,
}

export type Error = {
    'exit code': number
}
