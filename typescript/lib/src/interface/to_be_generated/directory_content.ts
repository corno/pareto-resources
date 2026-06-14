import * as pi from 'pareto-core/dist/interface'

export type Node =
    | ['other', null]
    | ['file', string]
    | ['directory', Directory]

export type Directory = pi.Dictionary<Node>
