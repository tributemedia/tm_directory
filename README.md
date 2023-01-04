# Member Directory
Provides Directory Entry content type and related configuration. Directory Entries are used to add new people to your directory. A new Directory Entry will be automatically added to your directory page and sorted based on your site's configuration.

## Installation

$ composer require tributemedia/tm_directory: ^1.0

## Configuration

For standard configuration (no email functionality), you will need to remove the "Email Me" block from the Right Sidebar region.

For advanced option, you'll need to include the "Email Me" functionality by doing the following. 

1. Edit the Directory Listing Page display in the Directory view.
2. Select the Name field. 
3. Uncheck "Link to the Content"
4. Enable "Output this field as a custom link" under "Rewrite results" 
5. Select the Picture field.
6. Select "Nothing" in the "Link image to" drop down.
7. Enable "Override the output of this field with custom text" under "Rewrite results"
8. Select the Custom text field.
9. In the text field, remove the twig comment characters around the {{ view_node }} and {{ view_node_1 }} lines.
10. Edit Directory Entry content type. Select the manage fields tab.
11. Edit the Email field and check the "Required" box to require an email address entry.
