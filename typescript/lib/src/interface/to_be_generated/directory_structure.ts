import * as p_di from 'pareto-core/dist/data/interface'

export type Node =
    | ['other', null]
    | ['file', null]
    | ['directory', Directory]

export type Directory = p_di.Dictionary<Node>
