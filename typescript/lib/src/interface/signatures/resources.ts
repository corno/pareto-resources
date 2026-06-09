import * as _pi from 'pareto-core/dist/interface'

import * as resources from "../resources"

export namespace commands {

    /**
     * uses a directory content representation to write files in a directory structure
     */
    export type write_directory_content = _pi.Command_Procedure<
        resources.resources.commands.write_directory_content,
        {
            // 'make directory': resources_pareto.commands.make_directory
            'write file': resources.filesystem_unrestricted.commands.write_file

        },
        null,
        null
    >

}

export namespace queries {
    /**
     * creates a tree structure representing the directory structure, including file contents
     */
    export type read_directory_content = _pi.Query_Function<
        resources.resources.queries.read_directory_content,
        {
            'read directory': resources.filesystem_unrestricted.queries.read_directory,
            'read file within context': resources.filesystem_unrestricted.queries.read_file,
        },
        null
    >
    /**
     * creates a tree structure representing the directory structure, excluding file contents
     */
    export type read_directory_structure = _pi.Query_Function<
        resources.resources.queries.read_directory_structure,
        {
            'read directory': resources.filesystem_unrestricted.queries.read_directory,
        },
        null
    >

}