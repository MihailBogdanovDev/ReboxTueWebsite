const AboutProject = () =>{
    return(
<div
  class="grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[120px_1fr] lg:gap-8 lg:[&:has(*:first-child:hover)]:grid-cols-[160px_1fr]"
>
  <div class="h-32 rounded-lg bg-gray-100">
  <img
                className='h-8'
                src='/about.svg'
                alt="Logo"
                ></img>
  </div>
  <div class="h-32 rounded-lg bg-gray-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua.
   Ut enim ad minim veniam, quis nostrud exercitation ullamco
   laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
   voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
   sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
</div>
    )
}
export default AboutProject

