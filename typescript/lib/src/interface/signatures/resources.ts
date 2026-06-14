import * as pci from 'pareto-core/dist/command_interface'
import * as pqi from 'pareto-core/dist/query_interface'

import * as resources from "../resources"

export namespace commands {

    /**
     * uses a directory content representation to write files in a directory structure
     */
    export type write_directory_content = pci.Command_Procedure<
        resources.resources.commands.write_directory_content,
        null,
        null,
        {
            // 'make directory': resources_pareto.commands.make_directory
            'write file': resources.filesystem_unrestricted.commands.write_file

        }
    >

}

export namespace queries {
    /**
     * creates a tree structure representing the directory structure, including file contents
     */
    export type read_directory_content = pqi.Query_Function<
        resources.resources.queries.read_directory_content,
        null,
        {
            'read directory': resources.filesystem_unrestricted.queries.read_directory,
            'read file': resources.filesystem_unrestricted.queries.read_file,
        }
    >
    /**
     * creates a tree structure representing the directory structure, excluding file contents
     */
    export type read_directory_structure = pqi.Query_Function<
        resources.resources.queries.read_directory_structure,
        null,
        {
            'read directory': resources.filesystem_unrestricted.queries.read_directory,
        }
    >

}