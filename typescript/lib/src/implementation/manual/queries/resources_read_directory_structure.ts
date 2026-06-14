import * as pt from 'pareto-core/dist/query'
import * as pqi from 'pareto-core/dist/query_interface'

import * as d_directory_structure from "../../../interface/to_be_generated/directory_structure"
import * as d_read_directory_structure from "../../../interface/to_be_generated/read_directory_structure"

import * as signatures from "../../../interface/signatures/resources"

//dependencies
import * as t_path_to_path from "../transformers/unrestricted_path/unrestricted_path"

export const $$: signatures.queries.read_directory_structure = pt.query_function(
    ($d, $s, $q) => $q['read directory'](
        {
            'path': $d.path,
        },
        ($): d_read_directory_structure.Error => ['read directory', $],
    ).query(
        ($) => pt.dictionaryx.parallel(
            $,
            ($): pqi.Query_Result<d_directory_structure.Node, d_read_directory_structure.Node_Error> => {
                const path = $.path
                return pt.decide.state($['node type'], ($) => {
                    switch ($[0]) {
                        case 'directory': return pt.ss($, ($): pqi.Query_Result<d_directory_structure.Node, d_read_directory_structure.Node_Error> => $$(
                            null,
                            $q,
                        )(
                            {
                                'path': t_path_to_path.deprecated_node_path_to_context_path(path),
                            },
                            ($): d_read_directory_structure.Node_Error => ['directory', $]
                        ).transform<d_directory_structure.Node>(($): d_directory_structure.Node => ['directory', $]))
                        case 'file': return pt.ss($, ($) => pt.direct_result(['file', null]))
                        case 'other': return pt.ss($, ($) => pt.direct_result(['other', null]))
                        default: return pt.au($[0])
                    }
                })
            },
            ($): d_read_directory_structure.Error => ['directory structure processing', $],
        )
    )
)
