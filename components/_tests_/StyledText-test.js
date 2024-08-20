import * as React from react ;
import renderer from 'react-test-renderer';

import { MonoText } from '../StyledText';
it(`renders correctly`,()=>{
    const tree = renderer.create(<MonoText>Snasphot test!</MonoText>).toJson();
    expect(tree).toMatchSnapshot();
});

