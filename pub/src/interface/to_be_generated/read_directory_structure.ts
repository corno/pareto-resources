import * as _pi from 'pareto-core-interface'

import * as d_read_directory from "../generated/pareto/schemas/read_directory/data_types/source"
import * as d_path from "../generated/pareto/schemas/path/data_types/source"
import * as d_directory_structure from "./directory_structure"



export type Parameters = {
    'path': d_path.Node_Path,
}

export type Result = d_directory_structure.Directory

export type Node_Error =
    | ['directory', Error]

export type Error =
    | ['read directory', d_read_directory.Error]
    | ['directory structure processing', _pi.Dictionary<Node_Error>]
