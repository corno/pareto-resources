import * as _pi from 'pareto-core/dist/interface'

import * as d_read_directory from "../generated/liana/schemas/fs_sandboxed_read_directory/data"
import * as d_read_file from "../generated/liana/schemas/fs_sandboxed_read_file/data"
import * as d_path from "../generated/liana/schemas/fs_sandboxed_path/data"
import * as d_directory_contents from "./directory_content"



export type Parameters = {
    'path': d_path.Context_Path,
}

export type Result = d_directory_contents.Directory

export type Node_Error =
    | ['file', d_read_file.Error]
    | ['directory', Error]

export type Error =
    | ['read directory', d_read_directory.Error]
    | ['directory content processing', _pi.Dictionary<Node_Error>]
