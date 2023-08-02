import React from 'react'
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import router from 'next/router';
import { Dispatch } from 'redux';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setSubscription } from 'slices/subscribe';
import WrapperWaitlist from 'components/wrappers/wrapper-waitlist';
import InputText from 'components/forms/input-text/input-text';
import Button from 'components/commons/button';
import { Inputs } from 'utils/types/input';
import { validateRequired, validateEmail } from 'utils/validations/form-validation';

const JoinPage = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { handleSubmit, register, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formVal) => {
        const data = {
            ...formVal,
            step: 2
        }

        dispatch(setSubscription(data));

        router.push('/waitlist/register');
    }

    return (
        <WrapperWaitlist>
            <div className="flex flex-col gap-3 xl:items-center xl:justify-center">
                <div className="w-full xl:w-[720px] text-green-800 text-[50px] text-center xl:text-left xl:text-[65px] font-black">Join the waitlist and be the first to be notified once we`ve launched</div>
                <form noValidate onSubmit={handleSubmit(onSubmit)} className="w-full xl:h-[123px] flex flex-col xl:flex-row gap-3">
                    <div>
                        <InputText
                            name={'email'}
                            placeholder="Your Email"
                            variant="primary"
                            className="!w-full xl:!w-[460px]"
                            innerRef={register('email', { validate: { validateRequired, validateEmail } })}
                            errors={errors}
                        />
                    </div>
                    <div>
                        <Button
                            label="Join Waitlist"
                            size="md"
                            type="submit"
                            className="w-full h-[58px] xl:w-[172px]"
                        />
                    </div>
                </form>
            </div>
            <div className="w-full xl:w-[383.48px] xl:h-[743.96px]">
                <Image
                    src={'/images/logo/waitlist-join.png'}
                    alt='waitlist-join logo'
                    width={383.48}
                    height={743.96}
                />
            </div>
        </WrapperWaitlist>
    )
}

export default JoinPage;