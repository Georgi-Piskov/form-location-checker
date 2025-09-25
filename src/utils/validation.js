function validateName(name) {
    if (!name || name.trim() === "") {
        return "Name is required.";
    }
    return null;
}

function validateGender(gender) {
    const validGenders = ["male", "female", "other"];
    if (!validGenders.includes(gender)) {
        return "Gender must be male, female, or other.";
    }
    return null;
}

function validateAge(age) {
    if (!age || isNaN(age) || age < 0 || age > 120) {
        return "Please enter a valid age between 0 and 120.";
    }
    return null;
}

function validateCountry(country) {
    if (!country || country.trim() === "") {
        return "Country of residence is required.";
    }
    return null;
}

function validateForm(formData) {
    const errors = {};
    
    const nameError = validateName(formData.name);
    if (nameError) errors.name = nameError;

    const genderError = validateGender(formData.gender);
    if (genderError) errors.gender = genderError;

    const ageError = validateAge(formData.age);
    if (ageError) errors.age = ageError;

    const countryError = validateCountry(formData.country);
    if (countryError) errors.country = countryError;

    return errors;
}

export { validateForm };