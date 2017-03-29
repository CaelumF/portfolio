import React, {Component} from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles';

const memeText =
`def memeText(string, horizontalLine=True, verticalLine=True, diagonalLine=True):
    if horizontalLine:
        print(string)
    withoutFirstChar = string[1:]
    # Vertical line
    curIndex = 0
    for char in list(withoutFirstChar):
        curIndex += 1
        if(verticalLine):
            print(char, end="")
        else:
            # Ensure diagonal spacing is not affected by lack of vertical text.
            print('  ', end="")
        if (diagonalLine):
            print(' ' * curIndex * 3, end="")
            print(char)

print(memeText("NORMIESGETOUT"))`

class PythonSPage extends Component{
  render(){
    return(
      <div>
        <pre>
{`
I would normally be deterred by Python's soft typed-ness, but after actually using
it during MPT Cycle 2, I came to appreciate its usefulness on small projects in
keeping things succint.

In the future, I will make these examples runnable on this page. But for now you can
`}
<a href={"https://repl.it/languages/python3"}>paste the code into repl.it</a>
        </pre>

        <hr></hr>
        <h2>Multi-directional text converter</h2>
        <SyntaxHighlighter language='python' style={darcula}>
          {memeText}
        </SyntaxHighlighter>

      </div>
    )
  }
}

export default PythonSPage
