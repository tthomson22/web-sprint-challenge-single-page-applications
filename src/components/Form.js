import React from 'react' 

export default function Form(props){
    const { change, submit, errors } = props;
    const { size, special, pepperoni, basil, anchovies, pineapple } = props.values;

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
            </div>
            <form id='name-input' value='name' onSubmit={onSubmit}>
                
                <p>{errors.name}</p>
                <label id='size-dropdown' className='size'>Size:
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

                <div className='toppings'>Toppings:
                    <label className='pepperoni'>
                        <input
                            name='pepperoni'
                            type='checkbox'
                            checked={pepperoni}
                            onChange={onChange}
                        />
                    </label>

                    <label className='basil'>
                        <input
                            name='basil'
                            type='checkbox'
                            checked={basil}
                            onChange={onChange}
                        />
                    </label>

                    <label className='anchovies'>
                        <input
                            name='anchovies'
                            type='checkbox'
                            checked={anchovies}
                            onChange={onChange}
                        />
                    </label>

                    <label className='pineapple'>
                        <input
                            name='pineapple'
                            type='checkbox'
                            checked={pineapple}
                            onChange={onChange}
                        />
                    </label>
                </div>

                <label id='special-text' className='special'>Special instruction:
                    <input
                        name='special'
                        type='text'
                        value={special}
                        onChange={onChange}
                    />
                </label>

                <input
                    className='submit-button'
                    id='pizza-form'
                    type='submit'
                    value='Submit'
                />
            </form>
        </div>
    )
}