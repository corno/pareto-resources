import * as _pi from 'pareto-core/dist/interface'

import * as d_read_directory from "../generated/liana/schemas/fs_unrestricted_read_directory/data"
import * as d_path from "../generated/liana/schemas/fs_sandboxed_path/data"
import * as d_directory_structure from "./directory_structure"



export type Parameters = {
    'path': d_path.Context_Path,
}

export type Result = d_directory_structure.Directory

export type Node_Error =
    | ['directory', Error]

export type Error =
    | ['read directory', d_read_directory.Error]
    | ['directory structure processing', _pi.Dictionary<Node_Error>]
