import * as _pq from 'pareto-core-query'
import * as _pt from 'pareto-core-transformer'
import * as _pi from 'pareto-core-interface'

import * as d_directory_content from "../../interface/to_be_generated/directory_content"
import * as d_read_directory_content from "../../interface/to_be_generated/read_directory_content"

import * as signatures from "../../interface/signatures"

export const $$: signatures.queries.read_directory_content = _pq.create_query_function(
    ($p, $r) => $r['read directory'](
        {
            'path': $p.path,
        },
        ($): d_read_directory_content.Error => ['read directory', $],
    ).query_without_error_transformation(
        ($) => {
            return _pq.dictionary.parallel(
                $.map(($): _pi.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => {
                    const path = $.path
                    return _pt.cc($['node type'], ($) => {
                        switch ($[0]) {
                            case 'file': return _pt.ss($, ($): _pi.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => $r['read file'](
                                path,
                                ($): d_read_directory_content.Node_Error => ['file', $],
                            ).transform_result<d_directory_content.Node>(($) => ['file', $]))
                            case 'directory': return _pt.ss($, ($): _pi.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => {
                                return $$(
                                    $r,
                                )(
                                    {
                                        'path': path,
                                    },
                                    ($): d_read_directory_content.Node_Error => ['directory', $]
                                ).transform_result<d_directory_content.Node>(($): d_directory_content.Node => ['directory', $])
                            })
                            case 'other': return _pt.ss($, ($) => _pq.fixed(['other', null]))
                            default: return _pt.au($[0])
                        }
                    })
                }),
                ($): d_read_directory_content.Error => ['directory content processing', $],
            )
        }
    )
)
