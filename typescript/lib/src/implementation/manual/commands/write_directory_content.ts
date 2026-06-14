import * as pt from 'pareto-core/dist/command'
import p_list_from_text from 'pareto-core/dist/_p_list_from_text'


import * as signatures from "../../../interface/signatures/resources"

//data types
import * as d_directory_content from "../../../interface/to_be_generated/directory_content"
import * as d_write_directory_content from "../../../interface/to_be_generated/write_directory_content"

//dependencies
import * as t_path_to_path from "../transformers/unrestricted_path/unrestricted_path"

export const $$: signatures.commands.write_directory_content = pt.command_procedure(
    ($d, $s, $q, $c) => [
        // $c['make directory'].execute(
        //     $p.path,
        //     ($): inf.Error => ['make directory', $]
        // ),
        pt.dictionaryx.parallel<d_directory_content.Node, d_write_directory_content.Error, d_write_directory_content.Node_Error>(
            $d.directory,
            ($, id) => [
                pt.decide.state($, ($) => {
                    switch ($[0]) {
                        case 'other': return pt.ss($, ($) => pt.nothing())
                        case 'file': return pt.ss($, ($) => $c['write file'].execute(
                            {
                                'path': t_path_to_path.create_node_path($d.path, { 'node': id }),
                                'data': p_list_from_text(
                                    $,
                                    ($) => $
                                ),
                            },
                            ($): d_write_directory_content.Node_Error => ['file', $]
                        ))
                        case 'directory': return pt.ss($, ($) => $$(null, null, $c).execute(
                            {
                                'directory': $,
                                'path': t_path_to_path.extend_context_path_with_single_step($d.path, { 'addition': id }),
                            },
                            ($): d_write_directory_content.Node_Error => ['directory', $]

                        ))

                        default: return pt.au($[0])
                    }
                })
            ],
            ($): d_write_directory_content.Error => ['directory content', $]
        )
    ]
)
