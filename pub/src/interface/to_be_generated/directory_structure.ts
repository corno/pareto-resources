import * as _pi from 'pareto-core-interface'

export type Node =
    | ['other', null]
    | ['file', null]
    | ['directory', Directory]

export type Directory = _pi.Dictionary<Node>
