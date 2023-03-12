const form = document.querySelector('form')
const inputAction = document.getElementById('action')
const inputTime = document.getElementById('time')
const putBtn = document.getElementById('putToDoBtn')

function createElements(action, time) {
    const actionWrapper = document.getElementById('actionWrapper')

    const actionSingle = document.createElement('div')
    actionSingle.className = 'actionSingle'
    
    const actionContainer = document.createElement('div')
    actionContainer.className = 'actionContainer'

    const timeContainer = document.createElement('div')
    timeContainer.className = 'timeContainer'

    const h2Action = document.createElement('h2')
    h2Action.textContent = 'Ação:'

    const h2Time = document.createElement('h2')
    h2Time.textContent = 'Hora:'

    const spanAction = document.createElement('span')
    spanAction.textContent = action

    const spanTime = document.createElement('span')
    spanTime.textContent = time

    const buttonRemove = document.createElement('button')
    buttonRemove.className = 'btnRemove'
    buttonRemove.id = 'btnRemove'
    buttonRemove.type = 'click'
    buttonRemove.textContent = 'Remover'

    

    actionContainer.appendChild(h2Action)
    actionContainer.appendChild(spanAction)

    timeContainer.appendChild(h2Time)
    timeContainer.appendChild(spanTime)

    actionSingle.appendChild(actionContainer)
    actionSingle.appendChild(timeContainer)
    actionSingle.appendChild(buttonRemove)

    actionWrapper.appendChild(actionSingle)

    document.querySelectorAll('.btnRemove').forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const thisBtn = e.target
    
            const div = thisBtn.closest('.actionSingle')
    
            div.remove()
        })
    })
}

function executeForm(inputValueAction, inputValueTime) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
    
        inputValueAction = inputAction.value
        inputValueTime = inputTime.value
    
        createElements(inputValueAction, inputValueTime)
    
        document.getElementById('action').value = ''
        document.getElementById('time').value = ''
    
        
    })
}

executeForm()


