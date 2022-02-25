import React from 'react' 

export default function Form(props){
    const { change, submit, errors } = props;
    const { username, size, special, pepperoni, basil, anchovies, pineapple } = props.values;

    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal)
    }

    return(
        <div className='form-container'>
            <div className='form-header'>
                <h2>Build your own pizza</h2>
                <p>{errors.username}</p>
            </div>
            <form id='pizza-form' onSubmit={onSubmit}>
                
                <label  className='name'>
                    <h3>Name:</h3>
                    
                    <input
                        id='name-input'
                        name='username'
                        type='text'
                        value={username}
                        onChange={onChange}
                    />
                </label>
                
                <label id='size-dropdown' className='size'>
                    <h3>Size:</h3>
                    <select
                        name='size'
                        value={size}
                        onChange={onChange}
                    >
                        <option value=''>--select size--</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </label>

                <div className='toppings'>
                    <h3>Toppings:</h3>
                    <label className='pepperoni'>pepperoni:
                        <input
                            name='pepperoni'
                            type='checkbox'
                            checked={pepperoni}
                            onChange={onChange}
                        />
                    </label>

                    <label className='basil'>basil:
                        <input
                            name='basil'
                            type='checkbox'
                            checked={basil}
                            onChange={onChange}
                        />
                    </label>

                    <label className='anchovies'>anchovies:
                        <input
                            name='anchovies'
                            type='checkbox'
                            checked={anchovies}
                            onChange={onChange}
                        />
                    </label>

                    <label className='pineapple'>pineapple:
                        <input
                            name='pineapple'
                            type='checkbox'
                            checked={pineapple}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <label id='special-text' className='special'>
                    <h3>Special instruction:</h3>
                    <input
                        name='special'
                        type='text'
                        value={special}
                        onChange={onChange}
                    />
                </label>

                <button id='order-button' className='orderbtn'>Add to Order</button>
            </form>
            
        </div>
    )
}