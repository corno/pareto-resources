import * as p_ from 'pareto-core/dist/implementation/query'
import p_super_query_result from 'pareto-core/dist/implementation/query/super_query_result'

import * as d_directory_structure from "../../../interface/data/directory_structure"
import * as d_read_directory_structure from "../../../interface/data/read_directory_structure"

import * as signatures from "../../../interface/signatures/resources"

//dependencies
import * as t_path_to_path from "../transformers/unrestricted_path/unrestricted_path"

export const $$: signatures.queries.read_directory_structure = p_.query_function(
    ($d, $s, $q) => p_super_query_result($q['read directory'](
        {
            'path': $d.path,
        },
        ($): d_read_directory_structure.Error => ['read directory', $],
    )).query(
        ($) => p_.dictionary(
            $,
            ($): p_.Query_Result<d_directory_structure.Node, d_read_directory_structure.Node_Error> => {
                const path = $.path
                return p_.decide.state($['node type'], ($) => {
                    switch ($[0]) {
                        case 'directory': return p_.ss($, ($): p_.Query_Result<d_directory_structure.Node, d_read_directory_structure.Node_Error> => p_super_query_result($$(
                            null,
                            $q,
                        )(
                            {
                                'path': t_path_to_path.deprecated_node_path_to_context_path(path),
                            },
                            ($): d_read_directory_structure.Node_Error => ['directory', $]
                        )).transform<d_directory_structure.Node>(($): d_directory_structure.Node => ['directory', $]))
                        case 'file': return p_.ss($, ($) => p_.direct_result(['file', null]))
                        case 'other': return p_.ss($, ($) => p_.direct_result(['other', null]))
                        default: return p_.au($[0])
                    }
                })
            },
            ($): d_read_directory_structure.Error => ['directory structure processing', $],
        )
    )
)
