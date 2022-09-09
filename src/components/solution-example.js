import React from "react"
import CodeWithNote from "./code-with-note"
const SolutionExample = ({children}) => (
    <div className="solution-example-code">
        <CodeWithNote>
 {
`
from album.runner.api import setup

`}</CodeWithNote>
<CodeWithNote highlight='env_file' note='The conda environment associated with this solution, linked below as a setup parameter.'>
{`
env_file = """name: template-python
channels:
  - conda-forge
  - defaults
dependencies:
  - python=3.9
"""

`}</CodeWithNote>
<CodeWithNote highlight='install' note='The install method of this solution, linked below as a setup parameter.'>
{`
def install():
    print("Installing this solution...")

`}</CodeWithNote>
<CodeWithNote highlight='run' note='The run method of this solution, linked below as a setup parameter.'>
{`
def run():
    from album.runner.api import get_args
    print("Running this solution...")
    print("Hello ", str(get_args().name), ", nice to meet you!")

`}</CodeWithNote>
<CodeWithNote highlight='pre_test' note='The pre_test method of this solution, linked below as a setup parameter.'>
{`
def pre_test():
    return {'--name': 'Elsa'}
`}</CodeWithNote>

<CodeWithNote highlight='test' note='The test method of this solution, linked below as a setup parameter.'>
{`
def test():
    from album.runner.api import get_args
    assert(get_args().name == 'Elsa')

`}</CodeWithNote>
<CodeWithNote highlight='uninstall' note='The uninstall method of this solution, linked below as a setup parameter.'>
{`
def uninstall():
    print("Uninstalling this solution...")

`}</CodeWithNote>
<CodeWithNote highlight='setup' note='This enables album to parse the metadata of this solution.'>
{`
setup(
`
 }
</CodeWithNote>
<CodeWithNote highlight='group' note='The group/organization associated with the specific solution.'>
{`    group="album",`}</CodeWithNote>
<CodeWithNote highlight='name' note='The name of the solution itself.'>
{`    name="template-python",`}</CodeWithNote>
<CodeWithNote highlight='version' note='The version of the solution. Note that the -SNAPSHOT convention is used to indicate a version is not yet final.'>
{`    version="0.2.0",`}</CodeWithNote>
<CodeWithNote highlight='title' note='The title of the solution.'>
{`    title="Python template",`}</CodeWithNote>
<CodeWithNote highlight='description' note='This is a short description of the specific solution.'>
{`    description="An album solution template for running Python code.",`}</CodeWithNote>
<CodeWithNote highlight='authors' note='These are the authors of the solution [list of strings]'>
{`    authors=["Your name"],`}</CodeWithNote>
<CodeWithNote highlight='cite' note='This is a list of dictionaries that specify the citations associated with this solution file.'>
{`    cite=[{`}</CodeWithNote>
<CodeWithNote highlight='text' note='text for the text representation of the citation (Harvard format)'>
{`        "text": "Your first citation text",`}</CodeWithNote>
<CodeWithNote highlight='doi' note='doi the DOI URL of the solution, if one is available'>
{`        "doi": "your first citation doi"`}</CodeWithNote>
<CodeWithNote>{`    }],`}</CodeWithNote>
<CodeWithNote highlight='tags' note='This is a list of strings for tags that descript the specific solution.'>
{`    tags=["template", "java"],`}</CodeWithNote>
<CodeWithNote highlight='license' note='The license of the solution (e.g. MIT, Apache, GPL, ...)'>
{`    license="UNLICENSE",`}</CodeWithNote>
<CodeWithNote highlight='documentation' note='A link to the documentation for the solution.'>
{`    documentation="",`}</CodeWithNote>
<CodeWithNote highlight='covers' note='This is a list of cover images to be displayed for this solution in a catalog.'>
{`    covers=[{
        "description": "Dummy cover image.",
        "source": "cover.png"
    }],`}</CodeWithNote>
<CodeWithNote highlight='album_api_version' note='The version of the album runner compatible with this solution code.'>
{`    album_api_version="0.3.1",`}</CodeWithNote>
<CodeWithNote highlight='args' note='The arguments that can be (and may be required) to run the specific solution.'>
{`    args=[{`}</CodeWithNote>
<CodeWithNote highlight='name' note='The name of the solution argument.'>
{`        "name": "name",`}</CodeWithNote>
<CodeWithNote highlight='type' note='The type of the argument. Currently supported: string, file, directory.'>
{`        "type": "string",`}</CodeWithNote>
<CodeWithNote highlight='default' note='The default value of the argument.'>
{`        "default": "Bugs Bunny",`}</CodeWithNote>
<CodeWithNote highlight='description' note='The description of the argument.'>
{`        "description": "How do you want to be addressed?"`}</CodeWithNote>
<CodeWithNote>{`    }],`}</CodeWithNote>
<CodeWithNote highlight='install' note='The optional install function for the solution. When a solution is installed, the solution environment will be created and, if defined, the install method of the solution will be called in this environment.'>
{`    install=install,`}</CodeWithNote>
<CodeWithNote highlight='run' note='The run function for the solution.'>
{`    run=run,`}</CodeWithNote>
<CodeWithNote highlight='pre_test' note='The method is called during  `album test your-solution`. This function is evaluated before the `run` and `test` function are evaluated. The  purpose of this function is to do things like prepare files for testing and generate the input arguments. It can return a map which will be used as input parameters for the `run` call.'>
{`    pre_test=pre_test,`}</CodeWithNote>
<CodeWithNote highlight='test' note='The method is called during  `album test your-solution`. It is called after `pre_test` and `run` and should fail or succeed based on what was stored during the `run` call and the given input parameters. You can make it fail by throwing an error.'>
{`    test=test,`}</CodeWithNote>
<CodeWithNote highlight='uninstall' note='The optional uninstall function for the solution. When a solution is uninstalled, this method will be called if defined - afterwards, the environment of the solution and all associated solution files will be deleted.'>
{`    uninstall=uninstall,`}</CodeWithNote>
<CodeWithNote highlight='dependencies' note='This is a dictionary that specifies the environment of the solution.'>
{`    dependencies={'environment_file': env_file}`}</CodeWithNote>
<CodeWithNote>{`)

`
 }</CodeWithNote>
    </div>
)
export default SolutionExample
