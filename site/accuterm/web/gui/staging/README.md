# AccuTerm.IO GUI - Staging

<PageHeader />

## Release Notes - November 24th, 2020   
  
- Initial event integration for Edit control
- Controls - Continued property integration: 
   - Edit, Edit Password and Edit Multiline
   - Grid and Grid Editable
   - List, List Multisel, Drop Down List and Checked List
- Architecture - Controls now utilize Vue's computed, as opposed to data
   *Allows for guis/forms/controls to be seamlessly updated (via setprops, method, etc...) utilizing the power of vuex*
- Architecture - Add simpler identifier to each GUI Object and update services accordingly
   *Allows for guis/forms/controls to be located in nested array with ease*
- Architecture - Created simpler style functions to handle specfic style/css needs within each component
- Controls - Integrate new style functions into all controls
- Controls - Initial property integration for:
   - Label
   - Options
   - Checkbox (radio buttons)

## Release Notes - November 13th, 2020   
  
- Gui/Form/Control merger of similar components, e.g. 
   - Guis: SDI and MDI
   - Forms: Form Sizable, Form Fixed, SDI Sizable and SDI Fixed
   - Edit, Edit Password and Edit Multiline
   - Grid and Grid Editable
   - List, List Multisel, Drop Down List and Checked List
- Add initial support for parent controls: Picture, Tab, Tab group and Frame
- Continued development on controls: Edit, Grid, Checkbox and List
- Continued work Gui command handler service
- Implement working gui/form close process with close button 
- Architecture - Gui Object property refactor   
   *Allows for guis/forms/controls to easily integrate properties and have default values (helps prevent errors)*
- Add initial menu gui objects: Menu, Popup, Toolbar, Statusbar 
- Add support for internal gui objects

<PageFooter />