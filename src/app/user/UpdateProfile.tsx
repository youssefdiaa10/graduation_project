import { useState } from "react"
import { useUserStore } from "../../store/authStore"
import { IUpdateProfile } from "../../utils/types"

const defaultValues = {
    name: "",
    profilePic: "",
}

const UpdateProfile = () => {

    const { user, updateProfile } = useUserStore()
    const [newProfile, setNewProfile] = useState<Omit<IUpdateProfile, "message">>(defaultValues)

    const handleChange = (key: keyof typeof newProfile, value: string) => {
        setNewProfile((prevValue) => {
            return {
                ...prevValue,
                [key]: value
            }
        })
    }

    return (
        <div className="w-[600px] mx-auto">
            <h1 className="text-center font-bold text-main text-[37px] mt-10">Update Profile</h1>

            <div className="flex flex-col w-fit mx-auto my-3 mt-11">
                <label
                    htmlFor="name"
                    className="text-center text-[19px]"
                >
                    New Name
                </label>
                <input
                    value={newProfile.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    id="name"
                    className="border border-black rounded-2xl py-1 mt-3 px-5"
                    placeholder="New Name"
                    type="url"
                />
            </div>

            <div className="flex flex-col w-fit mx-auto my-3 mt-11">
                <label
                    htmlFor="profilepicture"
                    className="text-center text-[19px]"
                >
                    New Profile Picture
                </label>
                <input
                    value={newProfile.profilePic}
                    onChange={(event) => handleChange("profilePic", event.target.value)}
                    id="profilepicture"
                    className="border border-black rounded-2xl py-1 mt-3 px-5"
                    type="file"
                />
            </div>

            <button
                onClick={() => {
                    updateProfile(user.id, newProfile.name, newProfile.profilePic)
                    console.log(newProfile)
                    setNewProfile(defaultValues)
                }}
                className="w-full text-center py-2 mt-9 transition duration-200 bg-secondary hover:bg-main text-white rounded-2xl font-bold text-[25px]"
            >
                Update
            </button>
        </div>
    )
}

export default UpdateProfile
