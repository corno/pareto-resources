import * as _p from 'pareto-core/dist/query'

import * as d_directory_structure from "../../../interface/to_be_generated/directory_structure"
import * as d_read_directory_structure from "../../../interface/to_be_generated/read_directory_structure"

import * as signatures from "../../../interface/signatures/resources"

//dependencies
import * as t_path_to_path from "../transformers/unrestricted_path/unrestricted_path"

export const $$: signatures.queries.read_directory_structure = _p.query_function(
    ($p, $r) => $r['read directory'](
        {
            'path': $p.path,
        },
        ($): d_read_directory_structure.Error => ['read directory', $],
    ).query(
        ($) => _p.dictionaryx.parallel(
            $.__d_map(($): _p.Query_Result<d_directory_structure.Node, d_read_directory_structure.Node_Error> => {
                const path = $.path
                return _p.decide.state($['node type'], ($) => {
                    switch ($[0]) {
                        case 'directory': return _p.ss($, ($): _p.Query_Result<d_directory_structure.Node, d_read_directory_structure.Node_Error> => $$(
                            $r,
                            null,
                        )(
                            {
                                'path': t_path_to_path.deprecated_node_path_to_context_path(path),
                            },
                            ($): d_read_directory_structure.Node_Error => ['directory', $]
                        ).transform<d_directory_structure.Node>(($): d_directory_structure.Node => ['directory', $]))
                        case 'file': return _p.ss($, ($) => _p.direct_result(['file', null]))
                        case 'other': return _p.ss($, ($) => _p.direct_result(['other', null]))
                        default: return _p.au($[0])
                    }
                })
            }),
            ($): d_read_directory_structure.Error => ['directory structure processing', $],
        )
    )
)
