import * as p_di from 'pareto-core/dist/data/interface'

import * as d_read_directory from "../generated/liana/schemas/fs_unrestricted_read_directory/data"
import * as d_path from "../generated/liana/schemas/fs_unrestricted_path/data"
import * as d_directory_structure from "./directory_structure"



export type Parameters = {
    'path': d_path.Context_Path,
}

export type Result = d_directory_structure.Directory

export type Node_Error =
    | ['directory', Error]

export type Error =
    | ['read directory', d_read_directory.Error]
    | ['directory structure processing', p_di.Dictionary<Node_Error>]
