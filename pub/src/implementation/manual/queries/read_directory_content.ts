import * as _p from 'pareto-core-query'
import * as _pi from 'pareto-core-interface'

import * as d_directory_content from "../../../interface/to_be_generated/directory_content"
import * as d_read_directory_content from "../../../interface/to_be_generated/read_directory_content"

import * as signatures from "../../../interface/signatures"

export const $$: signatures.queries.read_directory_content = _p.query_function(
    ($p, $r) => $r['read directory'](
        {
            'path': $p.path,
        },
        ($): d_read_directory_content.Error => ['read directory', $],
    ).query_without_error_transformation(
        ($) => _p.dictionaryx.parallel(
            $.map(($): _pi.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => {
                const path = $.path
                return _p.cc($['node type'], ($) => {
                    switch ($[0]) {
                        case 'file': return _p.ss($, ($): _pi.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => $r['read file'](
                            path,
                            ($): d_read_directory_content.Node_Error => ['file', $],
                        ).transform_result<d_directory_content.Node>(($) => ['file', $]))
                        case 'directory': return _p.ss($, ($): _pi.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => {
                            return $$(
                                $r,
                            )(
                                {
                                    'path': path,
                                },
                                ($): d_read_directory_content.Node_Error => ['directory', $]
                            ).transform_result<d_directory_content.Node>(($): d_directory_content.Node => ['directory', $])
                        })
                        case 'other': return _p.ss($, ($) => _p.direct_result(['other', null]))
                        default: return _p.au($[0])
                    }
                })
            }),
            ($): d_read_directory_content.Error => ['directory content processing', $],
        )
    )
)
