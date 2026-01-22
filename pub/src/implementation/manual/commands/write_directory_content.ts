import * as _p from 'pareto-core/dist/command'
import * as _pt from 'pareto-core/dist/transformer'
import * as _pq from 'pareto-core/dist/query'

import * as d_directory_content from "../../../interface/to_be_generated/directory_content"
import * as d_write_directory_content from "../../../interface/to_be_generated/write_directory_content"

import * as signatures from "../../../interface/signatures"

import * as t_path_to_path from "../schemas/path/transformers/path"

export const $$: signatures.commands.write_directory_content = _p.command_procedure(
    ($p, $cr, $qr) => [
        // $cr['make directory'].execute(
        //     $p.path,
        //     ($): inf.Error => ['make directory', $]
        // ),
        _p.dictionaryx.parallel<d_directory_content.Node, d_write_directory_content.Error, d_write_directory_content.Node_Error>(
            $p.directory,
            ($, key) => [
                _pt.sg($, ($) => {
                    switch ($[0]) {
                        case 'other': return _pt.ss($, ($) => _p.nothing())
                        case 'file': return _pt.ss($, ($) => $cr['write file'].execute(
                            {
                                'path': t_path_to_path.create_node_path($p.path, key),
                                'data': $
                            },
                            ($): d_write_directory_content.Node_Error => ['file', $]
                        ))
                        case 'directory': return _pt.ss($, ($) => $$($cr, null).execute(
                            {
                                'directory': $,
                                'path': t_path_to_path.extend_context_path($p.path, { 'addition': key }),
                            },
                            ($): d_write_directory_content.Node_Error => ['directory', $]
                            
                        ))
                            
                        default: return _pt.au($[0])
                    }
                })
            ],
            ($): d_write_directory_content.Error => ['directory content', $]
        )
    ]
)
