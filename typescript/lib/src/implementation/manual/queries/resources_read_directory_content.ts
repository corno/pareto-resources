import * as _p from 'pareto-core/dist/query'
import * as _pi from 'pareto-core/dist/interface'
import * as _pqi from 'pareto-core/dist/query_interface'

import _p_text_from_list from 'pareto-core/dist/_p_text_from_list'

import * as d_directory_content from "../../../interface/to_be_generated/directory_content"
import * as d_read_directory_content from "../../../interface/to_be_generated/read_directory_content"

import * as signatures from "../../../interface/signatures/resources"

//dependencies
import * as t_path_to_path from "../transformers/unrestricted_path/unrestricted_path"

export const $$: signatures.queries.read_directory_content = _p.query_function(
    ($d, $s, $q) => $q['read directory'](
        {
            'path': $d.path,
        },
        ($): d_read_directory_content.Error => ['read directory', $],
    ).query(
        ($) => _p.dictionaryx.parallel(
            $,
            ($): _pqi.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => {
                const path = $.path
                return _p.decide.state($['node type'], ($) => {
                    switch ($[0]) {
                        case 'file': return _p.ss($, ($): _pqi.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => $q['read file'](
                            path,
                            ($): d_read_directory_content.Node_Error => ['file', $],
                        ).transform<d_directory_content.Node>(($) => ['file', _p_text_from_list($, ($) => $)]))
                        case 'directory': return _p.ss($, ($): _pqi.Query_Result<d_directory_content.Node, d_read_directory_content.Node_Error> => $$(
                            null,
                            $q,
                        )(
                            {
                                'path': t_path_to_path.deprecated_node_path_to_context_path(path),
                            },
                            ($): d_read_directory_content.Node_Error => ['directory', $]
                        ).transform<d_directory_content.Node>(($): d_directory_content.Node => ['directory', $]))
                        case 'other': return _p.ss($, ($) => _p.direct_result(['other', null]))
                        default: return _p.au($[0])
                    }
                })
            },
            ($): d_read_directory_content.Error => ['directory content processing', $],
        )
    )
)
