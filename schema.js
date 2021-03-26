// first 
import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import Movies from './Movies'
import Actor from '../../../React/src/documents/Actor'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        Movies,
        Actor,
    ]),
})