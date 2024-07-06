exports.updateRental = async (req, res) => {
    try {
        const rental = await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!rental) {
            return res.status(404).json({ message: 'Rental not found' });
        }
        res.json(rental);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteRental = async (req, res) => {
    try {
        const rental = await Rental.findByIdAndDelete(req.params.id);
        if (!rental) {
            return res.status(404).json({ message: 'Rental not found' });
        }
        res.json({ message: 'Rental deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
