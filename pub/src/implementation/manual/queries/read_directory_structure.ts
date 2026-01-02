import * as _p from 'pareto-core-query'
import * as _pi from 'pareto-core-interface'

import * as d_directory_structure from "../../../interface/to_be_generated/directory_structure"
import * as d_read_directory_structure from "../../../interface/to_be_generated/read_directory_structure"

import * as signatures from "../../../interface/signatures"

export const $$: signatures.queries.read_directory_structure = _p.query_function(
    ($p, $r) => $r['read directory'](
        {
            'path': $p.path,
        },
        ($): d_read_directory_structure.Error => ['read directory', $],
    ).query_without_error_transformation(
        ($) => _p.dictionary.parallel(
            $.map(($): _pi.Query_Result<d_directory_structure.Node, d_read_directory_structure.Node_Error> => {
                const path = $.path
                return _p.cc($['node type'], ($) => {
                    switch ($[0]) {
                        case 'directory': return _p.ss($, ($): _pi.Query_Result<d_directory_structure.Node, d_read_directory_structure.Node_Error> => {
                            return $$(
                                $r,
                            )(
                                {
                                    'path': path,
                                },
                                ($): d_read_directory_structure.Node_Error => ['directory', $]
                            ).transform_result<d_directory_structure.Node>(($): d_directory_structure.Node => ['directory', $])
                        })
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
