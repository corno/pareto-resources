import * as _pi from 'pareto-core/dist/interface'

export type Node =
    | ['other', null]
    | ['file', null]
    | ['directory', Directory]

export type Directory = _pi.Dictionary<Node>
