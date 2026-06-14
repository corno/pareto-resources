import * as pi from 'pareto-core/dist/interface'

// import * as d_make_directory from "../generated/liana/schemas/make_directory/data"
import * as d_write_file from "../generated/liana/schemas/fs_unrestricted_write_file/data"
import * as d_path from "../generated/liana/schemas/fs_unrestricted_path/data"
import * as d_directory_contents from "../to_be_generated/directory_content"

export type Parameters = {
    'path': d_path.Context_Path,
    'directory': d_directory_contents.Directory
}

export type Node_Error =
    | ['file', d_write_file.Error]
    | ['directory', Error]

export type Error =
    // | ['make directory', d_make_directory.Error]
    | ['directory content', pi.Dictionary<Node_Error>]
