document.addEventListener('DOMContentLoaded',function(){

    interval = 30
    // Task 1
    // loadinPage
    function LoadingPage(){
        let counter = document.querySelector('.loadingPageCounter').innerHTML
        var pageCount = setInterval(function(){
            if(parseInt(counter) !== 100){
                counter = parseInt(counter) + 1
                document.querySelector('.loadingPageCounter').innerHTML = counter
                console.log('yes')
            }
            else{  
                stopCounter()
            }
        }, interval);

        function stopCounter(){
            if(parseInt(counter) == 100){
                clearInterval(pageCount)
                document.querySelector('.loadingPge').style.opacity = 0
                setTimeout(function(){
                    document.querySelector('.loadingPge').style.display = 'none'
                }, 900)
            } 
        }

        
    }
    LoadingPage()


    // task 2
    function heroHeigt(){
        const height = document.querySelector('header').offsetHeight
        document.querySelector('.hero').style.marginTop = `${height}px`
    
        const windowHeight = window.innerHeight
        const newheightInPx = windowHeight - height;
        const newHeightInVh = (newheightInPx / windowHeight) * 100;
        document.querySelector('.hero').style.minHeight = newHeightInVh + 'vh'
    }
    heroHeigt()


    // task 3
    // width of aside tag
    function aside(width){
        const asideChildElementWidth = document.querySelector('.side_navBtn').clientWidth
        document.querySelector('aside').style.width = `${asideChildElementWidth}px`
        // OPEN SIDE NAVBAR FOR COLOR THEME
        document.querySelector('.side_navBtn').addEventListener('click',function(){
            // 
            document.querySelector('.color_themeChange').classList.toggle('navOpacity')
            if(document.querySelector('.color_themeChange').classList.contains('navOpacity')){
                document.querySelector('aside').style.width =  width
            }
            else{
                document.querySelector('aside').style.width = `${asideChildElementWidth}px`
            }
            setTimeout(document.querySelector('.color_themeChange').classList.toggle('sideNavStyle'), 600)

            console.log(screen.orientation.type.includes('landscape'))
        })
    }

    if(window.innerWidth <= 450){
        aside('80%')
    }
    else if (451 <= window.innerWidth && window.innerWidth  <= 768){
        aside('40%')
    }
    else if(screen.orientation.type.includes('landscape') && window.innerWidth <= 900){
        aside('35%')
    }
    else{
        aside('25%')
    }



    function reveal(name, item){
        var windowheight = window.innerHeight
        var revealtop = item.getBoundingClientRect().top
        var reavealpoint = 0
        if (revealtop < windowheight - reavealpoint){
            item.classList.add(name)
        }
        else{
            item.classList.remove(name)
        }
    }

    // REVEAL NAVBAR LINKS
    function revealNavbarLinks(){
        document.querySelectorAll('.nav_List').forEach(function(nav_List){
            reveal('reveal_links', nav_List)
        })
    }
    setTimeout(revealNavbarLinks, (interval * 100) + 500)


    // REVEAL TECH-STACK
    function revealTechStack(){
        document.querySelectorAll('.tool_item').forEach(function(tool_item){
            reveal('tools_reveal', tool_item)
        })
    }
    window.addEventListener('scroll',revealTechStack)


    // REVEAL PROJECTS
    function revealProjects(){
        document.querySelectorAll('.project_card').forEach(function(project_card){
            reveal('reveal_projects',project_card)
        })
    }
    window.addEventListener('scroll',revealProjects)


    // REVEAL CONTACT
    function revealContact(){
        document.querySelectorAll('.contact_div').forEach(function(contact_div){
            reveal('reveal_contact',contact_div)
        })
    }
    window.addEventListener('scroll',revealContact)


    // CLOSING MOBILE NAV
    function closeMobileNav(){
        document.querySelector('.mobileLinks').style.opacity = 0
        setTimeout(function(){
            document.querySelector('.mobileLinks').style.display = 'none'
        }, 900)
    }
    // 
    document.querySelector('.burgerClose').addEventListener('click',function(){
        closeMobileNav()
    })

    document.querySelectorAll('.mobile_link').forEach(function(mobile_link){
        mobile_link.addEventListener('click',function(){
            closeMobileNav()
        })
    })

    
    // OPENING MOBILE NAVBAR
    document.querySelector('.mobile_hamburger').addEventListener('click',function(){
        document.querySelector('.mobileLinks').style.display = 'block'
        setTimeout(function(){
            document.querySelector('.mobileLinks').style.opacity = 1
        }, 100)
    })



    // COLOR CHANGE

    document.querySelectorAll('.color').forEach(function(color){
        color.addEventListener('click',function(){
            // 
            document.querySelectorAll('.variable_color').forEach(function(variable_color){
                variable_color.style.color = color.dataset.color
            })
            // 
            document.querySelectorAll('.variable_background').forEach(function(variable_background){
                variable_background.style.background = color.dataset.background
            })
            // 
            document.querySelectorAll('.variable_border').forEach(function(variable_border){
                variable_border.style.borderColor = color.dataset.color
            })

            document.querySelectorAll('.tool_item').forEach(function(tool_item){
                tool_item.addEventListener('mouseover',function(){
                    this.querySelector('.skillSet').style.color = color.dataset.color
                })

                tool_item.addEventListener('mouseleave',function(){
                    this.querySelector('.skillSet').style.color = '#fff'
                })
            })


            document.querySelectorAll('.mobile_nav_List').forEach(function(nav_List){
                nav_List.addEventListener('mouseover',function(){
                    nav_List.style.background = color.dataset.background

                    nav_List.querySelector('.mobile_link').style.color = '#fff'
                })
                nav_List.addEventListener('mouseleave',function(){
                    nav_List.style.background = 'transparent'
                    nav_List.querySelector('.mobile_link').style.color = color.dataset.color
                })
            })
            


        })



    })


    // TYPING EFFECT with CHATGPT

    const lines = ["Full Stack Web developer"]

    let currentLine = 0
    let currentCharacter = 0

    function typeLine(){
        if(currentCharacter < lines[currentLine].length){
            const typingElement = document.querySelector('.typing_effect')
            typingElement.innerHTML += lines[currentLine].charAt(currentCharacter)
            currentCharacter++
            setTimeout(typeLine,100)
        }
        else{
            currentCharacter--
            setTimeout(eraseLine, 50)
        }

    }

    function eraseLine(){
        if(currentCharacter >= 0){
            const typingElement = document.querySelector('.typing_effect')
            typingElement.innerHTML = lines[currentLine].substring(0, currentCharacter)
            currentCharacter--
            setTimeout(eraseLine,200)
        }
        else{
            currentLine++
            if(currentLine >= lines.length){
                currentLine = 0
            }
            setTimeout(typeLine,500)
        }
    }
    
    typeLine()


    // GREETING WITH CHATGPT
    let today = new Date()
    let hourNow = today.getHours()
    const greeting = document.querySelector('.greetings')

    if (hourNow >= 0 && hourNow < 12){
        greeting.innerHTML = 'GOOD MORNING'
    }
    else if(hourNow >= 12 && hourNow < 16){
        greeting.innerHTML = 'GOOD AFTERNOON'
    }
    else{
        greeting.innerHTML = 'GOOD EVENING'
    }

})
