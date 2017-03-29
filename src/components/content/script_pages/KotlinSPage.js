import React, {Component} from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles';

const discordConverter =
`fun stringToDiscordRIs(input: String): String {
    val output = StringBuilder()
    for (i in input.toCharArray()) {
        output.append(when (i.toLowerCase().toInt()) {
            in 'a'.toInt()..'z'.toInt() -> ":regional_indicator_$i: "
            ' '.toInt() -> "  "
            else -> " "
        })
    }
    return output.toString()
}

fun main(args: Array<String>) {
    print(stringToDiscordRIs("Hello world"))
}`

class KotlinSPage extends Component{
  render(){
    return(
      <div>
        <pre>
{`
Kotlin is currently my favourite programming language. It is statically typed,
very concise and has a bunch of features that make programming with it really joyful.

It also compiles to JVM ByteCode, it has accces to all Java librarys and so my knowledge
of the JVM platform was ported over in the 2 weeks it takes to learn Kotlin.

In the future, I will make these examples runnable on this page. But for now you can use
`}
<a href={"http://try.kotlinlang.org"}>try.kotlin and paste the code into there.</a>
        </pre>

        <hr></hr>
        <h2>String to Discord big regional indicator characters</h2>
        <SyntaxHighlighter language='Kotlin' style={darcula}>
          {discordConverter}
        </SyntaxHighlighter>

      </div>
    )
  }
}

export default KotlinSPage
