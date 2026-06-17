import * as p_ from 'pareto-core/dist/interface/data'

export type Node =
    | ['other', null]
    | ['file', null]
    | ['directory', Directory]

export type Directory = p_.Dictionary<Node>
